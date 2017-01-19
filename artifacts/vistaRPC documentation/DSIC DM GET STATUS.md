---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DM GET STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DM GET STATUS{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [DSICDM](http://code.osehra.org/dox/Routine_DSICDM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return the status(es) of import requests for an individual DSS application. If you pass the transaction ID then the status of thattransaction will be returned.  You can also retrieve the statuses of allrequests or all requests of a certain status.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TRANID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the transaction ID that was passed to the VistA Imaging Import Queue.  It must be in the format DSS;xxxxxx.unique identifier.{:/} | 
| {::nomarkdown}WHICH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a string of codes to determine which transaction statuses to return.  The parameter WHICH and TRANID are mutually excluded.  That is if TRANID is passed, the parameter WHICH will not even be evaluated or acted upon. If WHICH contains A, then retrieve all transactions for all statusesIf WHICH contains E, then retrieve all ERROR transactionsIf WHICH contains S, then retrieve all SUCCESSFUL transactionsIf WHICH contains P, then retrieve all PENDING transactions{:/} | 
| {::nomarkdown}DEL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag (0 or 1) will control whether or not the transaction record should be deleted from file 19621.   Default value is 0, do not delete If DEL=1 then delete all SUCCESSFUL transactions returned in the RPCcall.  So this will not delete import requests in an error state orpending.{:/} | 
| {::nomarkdown}APP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the application code assigned to a DSS application.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}