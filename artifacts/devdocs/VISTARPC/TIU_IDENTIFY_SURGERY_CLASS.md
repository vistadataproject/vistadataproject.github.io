---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU IDENTIFY SURGERY CLASS
# TIU IDENTIFY SURGERY CLASS

This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1).

Property | Value
--- | ---
Label | SURGCLAS
Routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLNAME | LITERAL |  | true | This is the name (ASCII LITERAL) of the Class for which the callingapplication needs an IEN.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SURGCLAS^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | RPC to identify class 
Input Parameters | CLNAME
First Comment | {::nomarkdown}<pre><code> CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S CLNAME=$G(CLNAME,"SURGICAL REPORTS")<br/> S Y=$$CLASS^TIUSROI(CLNAME)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}