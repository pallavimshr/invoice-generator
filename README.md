# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React and Redux. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

### Live Demo


### Installation

```
git clone https://github.com/pallavimshr/invoice-generator

npm install

npm start / npm run build
```

### How to use the app
- Click on the **"Create New Invoice"** button to *create a new invoice*.
    - Fill in the details of the invoice and click on the "Add Item" button to add items to the invoice.
    - The invoice number is set manually and is not auto-generated.
    - It is **mandatory** to fill in the **invoice number**, **due date** and other details <font color='red'><u>*except*</u></font> Notes, Tax Rates and Discount Rates.
    - Click on **'Review and Save Invoice'** button to save the invoice. Then it will redirect you to the invoice list page.

- To **View** an Invoice, click on the *"View" button* in the invoice list page.
- To **Download** a PDF of the invoice, *click on 'view' button* of a particular invoice > click on the "*Download Copy*" button.
- Click on the **"Edit"** button to *edit an invoice*.
- Click on the **"Delete"** button to *delete an invoice*.

