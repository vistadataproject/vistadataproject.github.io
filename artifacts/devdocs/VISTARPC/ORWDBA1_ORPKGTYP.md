---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDBA1 ORPKGTYP
# ORWDBA1 ORPKGTYP

Array of Order Package Types

Property | Value
--- | ---
Label | ORPKGTYP
Routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORLST | LIST | 255 | true | List of Order IENs



### MUMPS Method Description

Property | Value
--- | ---
Method | [ORPKGTYP^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Method Comment | Build BA supported packages array
Input Parameters | ORLST
First Comment | {::nomarkdown}<pre><code> GMRC=Prosthetics, LR=Lab, PSO=Pharmacy, RA=Radiology</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N OIREC,OIV,OIVN<br/> F I=1:1 S ORPKG=$P("GMRC;LR;PSO;RA",";",I) Q:ORPKG=""  D<br/> . S ORPKG(+$O(^DIC(9.4,"C",ORPKG,0)))=ORPKG  ; ^DIC(9.4) is package file<br/> S GMRCPROS=+$O(^DIC(9.4,"C","GMRC",0))<br/> D ORPKG1(.Y,.ORLST)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}