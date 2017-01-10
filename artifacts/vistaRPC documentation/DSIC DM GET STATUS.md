---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DM GET STATUS 

 property | value 
--- | --- 
 label | DSIC DM GET STATUS
 tag | STATUS
 routine | [DSICDM](http://code.osehra.org/dox/Routine_DSICDM_source.html)
 return value type | GLOBAL ARRAY
 description | This will return the status(es) of import requests for an individual DSS application. If you pass the transaction ID then the status of thattransaction will be returned.  You can also retrieve the statuses of allrequests or all requests of a certain status.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TRANID | LITERAL | 50 | true | This is the transaction ID that was passed to the VistA Imaging Import Queue.  It must be in the format DSS;xxxxxx.unique identifier. | 
| vs:Input_Parameter-8994_02 | WHICH | LITERAL | 4 | true | This is a string of codes to determine which transaction statuses to return.  The parameter WHICH and TRANID are mutually excluded.  That is if TRANID is passed, the parameter WHICH will not even be evaluated or acted upon. If WHICH contains A, then retrieve all transactions for all statusesIf WHICH contains E, then retrieve all ERROR transactionsIf WHICH contains S, then retrieve all SUCCESSFUL transactionsIf WHICH contains P, then retrieve all PENDING transactions | 
| vs:Input_Parameter-8994_02 | DEL | LITERAL | 1 | true | This flag (0 or 1) will control whether or not the transaction record should be deleted from file 19621.   Default value is 0, do not delete If DEL=1 then delete all SUCCESSFUL transactions returned in the RPCcall.  So this will not delete import requests in an error state orpending. | 
| vs:Input_Parameter-8994_02 | APP | LITERAL | 7 | true | This is the application code assigned to a DSS application.   | 