---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN ISPROSVC<br/>
# ORQQCN ISPROSVC

RPC will return 1 or 0 if the supplied file entry from 123.5 is marked as part of the Consults-Prosthetics interface.  This RPC is used to disable the Earliest Appropriate Date field and value when ordering Prosthetics requests via CPRS GUI.

## Properties

Property | Value
--- | ---
Label | ISPROSVC
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISPROSVC^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | IS THIS SERVICE PART OF CONSULTS-PROSTHETICS INTERFACE, wat/OR*3*280
Input Parameters | GMRCIEN
First Comment | {::nomarkdown}<pre><code>GMRCIEN - IEN of selected service</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $G(^GMR(123.5,$G(GMRCIEN),"INT"))=1 S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}