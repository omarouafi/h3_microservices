import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

DATABASE_URL = os.getenv('DATABASE_URL')


engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)

@app.get('/')
def read_root():
    session = Session()
    result = session.execute(text('SELECT customer_id, company_name, contact_name FROM customers LIMIT 10'))
    return {'Customers info': [dict(customerid=row[0], companyname=row[1], contactname=row[2]) for row in result]}

@app.get('/{customer_id}')
def read_customer(customer_id: str):
    session = Session()
    result = session.execute(
        text('SELECT customer_id, company_name, contact_name FROM customers WHERE customer_id = :customer_id'), 
        {'customer_id': customer_id}
    )
    return {'Customer info': [dict(customerid=row[0], companyname=row[1], contactname=row[2]) for row in result]}
