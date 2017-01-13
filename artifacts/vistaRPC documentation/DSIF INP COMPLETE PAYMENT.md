---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP COMPLETE PAYMENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP COMPLETE PAYMENT{:/}
 tag | {::nomarkdown}COMP{:/}
 routine | [DSIFEAP](http://code.osehra.org/dox/Routine_DSIFEAP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Logic cloned from FBCHEAP to complete a CH payment{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}; [*n should start with 1](Req - DATA(*InvIEN,n)=   1 ^ Invoice Date Received (Opt - FM Date)   2 ^ Vendor (Req - IEN to file 161.2 or changed)   4 ^ Pointer to 7078 or 583 (format: \IEN;FB7078(\  or \IEN;FB583(\ )   5 ^ Treatment from date (Opt - FM date);1 (Special flag for        treatment dates) (1 means bypass the treatment date verification       and allow the user to input any date)   6 ^ Treatment to date (Opt - FM date) 6.6 ^ BILLED CHARGES   7 ^ AMOUNT CLAIMED   8 ^ AMOUNT PAID   11 ^ FEE PROGRAM (Req)  Pointer to 161.8                         15 ^ New Batch IEN (Opt - if rejects) ;           20 ^ Batch IEN  24 ^ DISCHARGE DRG (Opt if Pricex flag=1, same as 24.5) 24.5 ^ DRG Weight (Req - Type a Number between 0 and 999.9999)  26 ^ NVH PRICER AMOUNT  56 ^ FPPS CLAIM ID (Opt - Enter a non-zero number from 1 to            32 digits long, 0 decimal digits)  57 ^ FPPS LINE ITEM (Opt - This response must be a number or             a list or range or ALL, e.g., 1,3,5 or 2-4,8) Note, the following have 3 pieces:     58^.01^ Adj Reason (Req if Amount Paid not equal to Amount          Claimed - Pntr to ADJUSTMENT REASON File #161.91)    58^1^Adj Group (Req as Adj Reason - Pntr to ADJUSTMENT GROUP File           #161.92)    58^2^Adj Amount (Req as Adj Reason - Numeric : Amount Claimed -           Amount Paid)    59^Seq #(1 or 2)^Remittance Remark (Opt - Pntr to REMITTANCE REMARK               File #161.93)        (For Inpatient Invoices there is a max of 2 remarks) *InvIEN = Invoice IEN (file 162.5){:/} | 
| {::nomarkdown}PRICEX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Invoice Pricer exempt flag (1 - Yes, Null for no){:/} | 
| {::nomarkdown}MEDICARE ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:15:57 am