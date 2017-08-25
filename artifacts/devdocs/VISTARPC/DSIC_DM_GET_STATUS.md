---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DM GET STATUS<br/>
# DSIC DM GET STATUS

This will return the status(es) of import requests for an individual DSS application. If you pass the transaction ID then the status of thattransaction will be returned.  You can also retrieve the statuses of allrequests or all requests of a certain status.

## Properties

Property | Value
--- | ---
Label | STATUS
MUMPS Implementation | [DSICDM](http://code.osehra.org/dox/Routine_DSICDM_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TRANID | LITERAL | 50 | true | This is the transaction ID that was passed to the VistA Imaging Import Queue.  It must be in the format DSS;xxxxxx.unique identifier.
WHICH | LITERAL | 4 | true | This is a string of codes to determine which transaction statuses to return.  The parameter WHICH and TRANID are mutually excluded.  That is if TRANID is passed, the parameter WHICH will not even be evaluated or acted upon. If WHICH contains A, then retrieve all transactions for all statusesIf WHICH contains E, then retrieve all ERROR transactionsIf WHICH contains S, then retrieve all SUCCESSFUL transactionsIf WHICH contains P, then retrieve all PENDING transactions
DEL | LITERAL | 1 | true | This flag (0 or 1) will control whether or not the transaction record should be deleted from file 19621.   Default value is 0, do not delete If DEL&#x3D;1 then delete all SUCCESSFUL transactions returned in the RPCcall.  So this will not delete import requests in an error state orpending.
APP | LITERAL | 7 | true | This is the application code assigned to a DSS application.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}