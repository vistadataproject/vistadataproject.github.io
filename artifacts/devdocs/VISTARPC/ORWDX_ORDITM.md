---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX ORDITM<br/>
# ORWDX ORDITM

Returns an array of orderable items in the format:   Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name

## Properties

Property | Value
--- | ---
Label | ORDITM
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ORDITM^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Subset of orderable items
Input Parameters | FROM, DIR, XREF, QOCALL
First Comment | {::nomarkdown}<pre><code> Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,X,DTXT,CURTM,DEFROUTE<br/> S DEFROUTE=""<br/> S QOCALL=+$G(QOCALL)<br/> S I=0,CNT=44,CURTM=$$NOW^XLFDT<br/> F  Q:I'<CNT  S FROM=$O(^ORD(101.43,XREF,FROM),DIR) Q:FROM=""  D<br/> . S IEN="" F  S IEN=$O(^ORD(101.43,XREF,FROM,IEN),DIR) Q:'IEN  D<br/> . . S X=^ORD(101.43,XREF,FROM,IEN)<br/> . . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br/> . . I 'QOCALL,$P(X,U,5) Q<br/> . . S I=I+1<br/> . . I 'X S Y(I)=IEN_U_$P(X,U,2)_U_$P(X,U,2)<br/> . . E  S Y(I)=IEN_U_$P(X,U,2)_$C(9)_"<"_$P(X,U,4)_">"_U_$P(X,U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}