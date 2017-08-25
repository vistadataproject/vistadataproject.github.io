---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI2 VITALS VALIDATE<br/>
# ORQQVI2 VITALS VALIDATE



## Properties

Property | Value
--- | ---
Label | VALIDATE
MUMPS Implementation | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDATE^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Input Parameters | ORQDATA
First Comment | {::nomarkdown}<pre><code> Given the array ORQDATA passed in by PCE Device Interface whose<br/> format is described in the PCE Device Interface documentation, this<br/> procedure will validate the Vitals data.  If the data is invalid,<br/> the procedure will return the errors in the form given above.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORVITALS,ORQVIT<br/> K ORRETURN<br/> S ORRETURN(0)=1<br/> D PREVITAL(.ORRETURN,.ORVITALS,.ORQVIT,.ORQDATA)<br/> D VALIDATE^GMRVPCE0(.ORVITALS)<br/> D POSTVIT(.ORRETURN,.ORQVIT,.ORVITALS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}