---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LIST ALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LIST ALL{:/}
 tag | {::nomarkdown}LISTALL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of patient names for use with a long list box.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LISTALL^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return a bolus of patient names.  From is either Name or IEN^Name.
 Input parameters | {::nomarkdown}FROM, DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT,FROMIEN,ORIDNAME S CNT=44,I=0,FROMIEN=0<br> I $P(FROM,U,2)'="" S FROMIEN=$P(FROM,U,1),FROM=$O(^DPT("B",$P(FROM,U,2)),-DIR)<br> F  S FROM=$O(^DPT("B",FROM),DIR) Q:FROM=""  D  Q:I=CNT<br> . S IEN=FROMIEN,FROMIEN=0 F  S IEN=$O(^DPT("B",FROM,IEN)) Q:'IEN  D  Q:I=CNT<br> . . S ORIDNAME=""<br> . . S ORIDNAME=$G(^DPT(IEN,0)) ; Get zero node name.<br> . . ; S X1=$G(^DPT(IEN,.1))_" "_$G(^DPT(IEN,.101))<br> . . S I=I+1 S Y(I)=IEN_U_FROM_U_U_U_U_$P(ORIDNAME,U) ;_"^"_X ; _"^"_X1  ;"   ("_X_")"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}