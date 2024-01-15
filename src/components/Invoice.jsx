import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import moment from 'moment/moment'
import { Button } from 'react-bootstrap'

const Invoice = ({ item, view, edit, remove }) => {
    return (
        <div className="p-4 mt-3 card rounded-7 d-flex ">
            <div className='d-flex justify-content-between row'>
                <div className='flex-fill mb-2 mb-sm-0 col-sm-7 d-flex justify-content-center align-items-start flex-column'>
                    <p className='lh-base mb-2 pb-1 fw-light text-muted'>INVOICE FOR</p>
                    <div className="">
                        <h4 className='fw-bold fs-4 mb-1 pb-1'>{item.billTo}</h4>
                        <h5 className="fw-light my-2" style={{ fontSize: '9px', color: '#48484887' }}>{item.billToEmail}</h5>
                        <p className='text-break fs-9 text-muted mb-0' >{item.billToAddress}</p>
                    </div>
                    <div className="" />
                    <p className='text-break mt-2' style={{ fontSize: '12px' }} >
                        <span className='text-muted'>INVOICE FROM:&nbsp;</span>
                        <span className='fw-bold'>{item.billFrom}</span>
                    </p>
                </div>
                <div className='flex-fill col-sm-3 p-4 custom-bg-grey-light' style={{ borderRadius: '15px' }}>
                    <div className='w-auto m-w-200'>
                        <p className='text-secondary mb-1 fw-bold fs-9' style={{ fontSize: '11px' }}>AMOUNT DUE</p>
                        <p className='mb-1 fs-2'>
                            <span className='text-muted d-inline-block mr-2' style={{ marginRight: '3px' }}>{item.currency}</span>
                            {item.total.toFixed(2)}
                        </p>
                        <p className='mb-0 text-muted fw-bolder'>
                            <span className='d-inline-block rounded-circle bg-danger me-2' style={{ padding: '5px' }}></span>
                            {moment(item.dateOfIssue).format('ll')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
                <Button onClick={view} type='button' variant='outline-secondary' className='me-2 fs--1 px-2' style={{ borderRadius: '7px' }}>
                    <span>VIEW</span>
                    <AiFillEye
                        height={30}
                        width={30}
                        alt="view button"
                    />
                </Button>
                <Button onClick={edit} type='button' variant='primary' className='me-2 fs--1 px-2' style={{ borderRadius: '7px' }}>
                    <span>EDIT</span>
                    <BiEdit
                        height={30}
                        width={30}
                        alt="edit button"
                    />
                </Button>
                <Button onClick={remove} type='button' variant='danger' className='me-2 fs--1 px-2' style={{ borderRadius: '7px' }}>
                    <span>DELETE</span>
                    <AiFillDelete
                        height={30}
                        width={30}
                        alt="delete button"
                    />
                </Button>
            </div>
        </div>
    )
}

export default Invoice