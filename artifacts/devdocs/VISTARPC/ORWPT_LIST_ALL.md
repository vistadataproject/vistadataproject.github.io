---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT LIST ALL<br/>
# ORWPT LIST ALL

Returns a set of patient names for use with a long list box.

## Properties

Property | Value
--- | ---
Label | LISTALL
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LISTALL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return a bolus of patient names.  From is either Name or IEN^Name.
Input Parameters | FROM, DIR
Code | {::nomarkdown}<pre><code> N I,IEN,CNT,FROMIEN,ORIDNAME S CNT=44,I=0,FROMIEN=0<br/> I $P(FROM,U,2)'="" S FROMIEN=$P(FROM,U,1),FROM=$O(^DPT("B",$P(FROM,U,2)),-DIR)<br/> F  S FROM=$O(^DPT("B",FROM),DIR) Q:FROM=""  D  Q:I=CNT<br/> . S IEN=FROMIEN,FROMIEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br/> . . S ORIDNAME=""<br/> . . S ORIDNAME=$G(^DPT(IEN,0)) ; Get zero node name.<br/> . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br/> . . S I=I+1 S Y(I)=IEN_U_FROM_U_U_U_U_$P(ORIDNAME,U) ;_"^"_X ; _"^"_X1  ;"   ("_X_")"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}