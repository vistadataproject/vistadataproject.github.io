---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET REQUEST
# TIU GET REQUEST

This Remote Procedure returns the variable pointer to the REQUESTINGPACKAGE REFERENCE (File #8925, Field #1405). This would be the record inthe Requesting Package (e.g., Consult/Request Tracking or Surgery) forwhich the resulting document has been entered in TIU.

Property | Value
--- | ---
Label | GET1405
Routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU Document File(#8925).



### MUMPS Method Description

Property | Value
--- | ---
Method | [GET1405^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Method Comment | Get the Request (field #1405) for a document
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUDAD,TIUTYP,TIU1405<br/> I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1^TIU Document does not exist" Q<br/> S TIUTYP=$P($G(^TIU(8925,TIUDA,0)),U)<br/> I $P(^TIU(8925,TIUDA,0),U,6)'="" D<br/> . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)<br/> . S TIUTYP=$P($G(^TIU(8925,TIUDAD,0)),U)<br/> I '+TIUTYP S TIUY="-1^TIU parent document does not exist" Q<br/> S TIU1405=$P($G(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14)),U,5)<br/> I '+TIU1405 S TIUY="-1^No Request found for this document" Q<br/> S TIUY=TIU1405</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}