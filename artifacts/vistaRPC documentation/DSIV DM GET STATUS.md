---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DM GET STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DM GET STATUS{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC has been archived as of June 20, 2005.  No applications should use this RPC after this date.  Please use the new RPC: DSIV DM GET STATUS1{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TRANID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the transaction ID that was passed to the VistA Imaging Import Queue.  It must be in the format DSS;xxxxxx.{:/} | 
| {::nomarkdown}WHICH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a string of codes to determine which transaction statuses to return.  The parameter WHICH and TRANID are mutually excluded.  That is if TRANID is passed, the parameter WHICH will not even be evaluated or acted upon. If WHICH contains A, then retrieve all transactions for all statusesIf WHICH contains E, then retrieve all ERROR transactionsIf WHICH contains S, then retrieve all SUCCESSFUL transactionsIf WHICH contains P, then retrieve all PENDING transactions{:/} | 
| {::nomarkdown}DEL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag (0 or 1) will control whether or not the transaction record should be deleted from file 19621.   Default value is 0, do not delete If DEL=1 then delete all SUCCESSFUL transactions returned in the RPCcall.  So this will not delete import requests in an error state orpending.{:/} | 
| {::nomarkdown}APP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the application code assigned to a DSS application.  {:/} | 




 Generated on January 13th 2017, 7:15:28 am