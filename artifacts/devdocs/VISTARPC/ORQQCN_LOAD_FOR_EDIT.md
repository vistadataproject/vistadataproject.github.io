---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN LOAD FOR EDIT
# ORQQCN LOAD FOR EDIT

Given a consult IEN, returns the current values of that record's fields.

Property | Value
--- | ---
Label | EDITLOAD
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [EDITLOAD^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Load a cancelled consult/procedure for editing
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> N ORNODE,I<br/> S ORNODE=$NAME(^TMP("GMRCR",$J)),I=0<br/> D SEND^GMRCGUIC(GMRCO,ORNODE)<br/> S Y=ORNODE<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}