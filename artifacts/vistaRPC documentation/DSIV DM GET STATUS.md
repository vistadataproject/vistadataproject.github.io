---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DM GET STATUS 

 property | value 
--- | --- 
 label | DSIV DM GET STATUS
 tag | STATUS
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC has been archived as of June 20, 2005.  No applications should use this RPC after this date.  Please use the new RPC: DSIV DM GET STATUS1

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TRANID | LITERAL | 50 | true | This is the transaction ID that was passed to the VistA Imaging Import Queue.  It must be in the format DSS;xxxxxx. | 
| WHICH | LITERAL | 4 | true | This is a string of codes to determine which transaction statuses to return.  The parameter WHICH and TRANID are mutually excluded.  That is if TRANID is passed, the parameter WHICH will not even be evaluated or acted upon. If WHICH contains A, then retrieve all transactions for all statusesIf WHICH contains E, then retrieve all ERROR transactionsIf WHICH contains S, then retrieve all SUCCESSFUL transactionsIf WHICH contains P, then retrieve all PENDING transactions | 
| DEL | LITERAL | 1 | true | This flag (0 or 1) will control whether or not the transaction record should be deleted from file 19621.   Default value is 0, do not delete If DEL=1 then delete all SUCCESSFUL transactions returned in the RPCcall.  So this will not delete import requests in an error state orpending. | 
| APP | LITERAL | 7 | true | This is the application code assigned to a DSS application.   | 




 ###### Generated on January 11th 2017, 6:39:43 am