---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI2 VITALS RATE CHECK<br/>
# ORQQVI2 VITALS RATE CHECK



## Properties

Property | Value
--- | ---
Label | RATECHK
Routine | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [RATECHK^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Input Parameters | ORQTYPE, ORQRATE, ORQUNIT
First Comment | {::nomarkdown}<pre><code> Extrinsic function to validate the<br/> rate for a particular measurement<br/>   Input<br/>   Variables:  ORQTYPE=Type of measurement (abbreviation<br/>               (req.)  from PCE Device Interface Specification).<br/>               ORQRATE=Measurement rate to be validated.<br/>               (req.)<br/>               ORQUNIT=Unit of measurement for rate, if specified.<br/>               (opt.)<br/>   Return value:  1 if rate is valid.<br/>                  0 if rate is invalid.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORRETURN=$$RATECHK^GMRVPCE0(ORQTYPE,ORQRATE,$G(ORQUNIT))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}