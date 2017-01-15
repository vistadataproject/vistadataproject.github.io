---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC ORDERS BY PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC ORDERS BY PATIENT{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of orders for a patient by various views.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient in the Patient file #2.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a 3-letter string identifying the type of orders to be returned:  ORN = Active Nursing (text) orders  ORV = Orders unverified by nursing  ORU = Unsigned orders by USER{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the pointer to the user in the New Person file #200; it is requiredfor Unsigned Orders.{:/} | 
| {::nomarkdown}DETAILS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This flag indicates whether to return the details with each order (true),or just the list of order ID's (false).{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to start searching for orders, in the form YYYMMDDHHMMSS.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date to stop searching for orders, in the form YYYMMDDHHMMSS.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}