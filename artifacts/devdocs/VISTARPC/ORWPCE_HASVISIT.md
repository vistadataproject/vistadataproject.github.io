---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE HASVISIT
# ORWPCE HASVISIT

Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined

Property | Value
--- | ---
Label | HASVISIT
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  |  | IEN of the Note.
DFN | LITERAL |  |  | Patient DFN.
ORLOC | LITERAL |  |  | Hospital Location.
ORDTE | LITERAL |  |  | Visit Date



### MUMPS Method Description

Property | Value
--- | ---
Method | [HASVISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Has visit or is stand alone
Input Parameters | IEN, DFN, ORLOC, ORDTE
Code | {::nomarkdown}<pre><code> N ORVISIT<br/> S ORY=-1<br/> I +$G(IEN)>0 S ORVISIT=+$P($G(^TIU(8925,+IEN,0)),U,3)<br/> I +$G(ORVISIT)'>0 S ORVISIT=$$GETENC^PXAPI(DFN,ORDTE,ORLOC)<br/> I +$G(ORVISIT)>0 S ORY=$$VST2APPT^PXAPI(ORVISIT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}