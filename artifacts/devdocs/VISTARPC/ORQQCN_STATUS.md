---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN STATUS
# ORQQCN STATUS

Returns a list of consult statuses currently in use, as reflected in the"AC" XREF of ^GMR(123.1.

Property | Value
--- | ---
Label | STATUS
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [STATUS^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Returns a list of statuses currently in use
Code | {::nomarkdown}<pre><code> N GMRCORST<br/> S GMRCORST=0,Y(999)="999^OTHER^"<br/> F  S GMRCORST=$O(^ORD(100.01,GMRCORST)) Q:'+GMRCORST  D<br/> . I '$D(^GMR(123.1,"AC",GMRCORST)) S Y(999)=Y(999)_GMRCORST_"," Q<br/> . Q:$$SCREEN^XTID(100.01,,GMRCORST_",")  ;inactive VUID<br/> . S Y(GMRCORST)=GMRCORST_U_$P(^ORD(100.01,GMRCORST,0),U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}