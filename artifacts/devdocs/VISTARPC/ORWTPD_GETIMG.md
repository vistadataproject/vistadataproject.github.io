---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPD GETIMG
# ORWTPD GETIMG



Property | Value
--- | ---
Label | GETIMG
Routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETIMG^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Get Image (local only) Time/Occ
Input Parameters | RPT
Code | {::nomarkdown}<pre><code> N IMGID,BEG,END,MAX<br/> S IMGID=0,Y=""<br/> S IMGID=$O(^ORD(101.24,"B","ORRP IMAGING",0))<br/> D GETINDV(.Y,IMGID)<br/> I $L(Y) D<br/> . S BEG=$$DT^ORCHTAB1($P(Y,";"))<br/> . S END=$$DT^ORCHTAB1($P(Y,";",2))<br/> . S MAX=$P(Y,";",3)<br/> . S Y=BEG_"^"_END_"^"_MAX<br/> I Y="" D GETDEF^ORWRA(.Y)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}