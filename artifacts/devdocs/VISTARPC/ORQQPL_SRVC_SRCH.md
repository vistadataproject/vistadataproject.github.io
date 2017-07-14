---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL SRVC SRCH<br/>
# ORQQPL SRVC SRCH

gET LIST OF AVAILABLE SERVICES

## Properties

Property | Value
--- | ---
Label | SRVCSRCH
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SRVCSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | GET LIST OF SERVICES
Input Parameters | FROM, DIR, ALL
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S I=0,CNT=44<br/> F  Q:I=CNT  S FROM=$O(^DIC(49,"B",FROM),DIR) Q:FROM=""  D<br/> . S IEN=$O(^DIC(49,"B",FROM,0)) I '$G(ALL),$P(^DIC(49,IEN,0),U,9)'="C" Q<br/> . S I=I+1,Y(I)=IEN_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}