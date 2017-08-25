---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN SET ACT MENUS<br/>
# ORQQCN SET ACT MENUS

Based on the IEN of the consult passed in, returns a string representingvarious facets of the user's access level for that consult and service.This allows dynamic enabling/disabling of GUI menus based on the user'sability to act on that particular consult.  

## Properties

Property | Value
--- | ---
Label | SETACTM
MUMPS Implementation | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT ID | LITERAL | 16 | true | Internal file number of the selected consult.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SETACTM^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | set action menus in GUI based on service of selected consult
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> N ORFLG<br/> S Y=0<br/> D CPRS^GMRCACTM(GMRCO,1)<br/> Q:'$D(ORFLG(GMRCO))<br/> S Y=ORFLG(GMRCO)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}