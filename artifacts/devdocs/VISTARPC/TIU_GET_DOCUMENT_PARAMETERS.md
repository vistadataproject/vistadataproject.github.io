---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET DOCUMENT PARAMETERS
# TIU GET DOCUMENT PARAMETERS

This Remote Procedure returns the parameters by which a given documentor document type is to be processed.

Property | Value
--- | ---
Label | DOCPARM
Routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number of the document in the TIU DOCUMENT FILE(#8925).
TIUTYP | LITERAL |  | true | This is the record number of the Document Definition in the TIU DOCUMENTDEFINITION FILE (#8925.1).  e.g., TIUTYP&#x3D;3 corresponds to the ClassProgress Notes, etc.



### MUMPS Method Description

Property | Value
--- | ---
Method | [DOCPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Get document parameters for GUI
Input Parameters | TIUDA, TIUTYP
Code | {::nomarkdown}<pre><code> I '+$G(TIUTYP),+$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+TIUDA,0))<br/> I '+$G(TIUTYP) S TIUY(0)="" Q<br/> D DOCPRM^TIULC1(TIUTYP,.TIUY,$G(TIUDA))<br/> I '$D(TIUY) S TIUY(0)=""</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}