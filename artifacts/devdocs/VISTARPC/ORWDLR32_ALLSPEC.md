---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 ALLSPEC<br/>
# ORWDLR32 ALLSPEC

Returns a list of specimens from the TOPOGRAPHY FIELD file (#61).

## Properties

Property | Value
--- | ---
Label | ALLSPEC
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLSPEC^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Return a set of specimens from topography file
Input Parameters | FROM, DIR
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,A,%,NOW,B<br/> D NOW^%DTC S NOW=$P(%,".")<br/> S I=0,CNT=44<br/> F  Q:I'<CNT  S FROM=$O(^LAB(61,"B",FROM),DIR) Q:FROM=""  D<br/> . S IEN=0 F  S IEN=$O(^LAB(61,"B",FROM,IEN)) Q:'IEN  D<br/> . . S A=$G(^LAB(61,IEN,64.91)) S B=$P(A,"^",3) I B]"",B'>NOW Q<br/> . . S I=I+1,Y(I)=IEN_U_FROM_"  ("_$P($G(^LAB(61,IEN,0)),U,2)_")"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}