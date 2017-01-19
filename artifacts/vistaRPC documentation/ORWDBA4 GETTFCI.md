---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA4 GETTFCI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA4 GETTFCI{:/}
 tag | {::nomarkdown}GETTFCI{:/}
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTFCI^[ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 Method comment | Get Treatment Factors Clinical Indicators
 First comment | {::nomarkdown}<pre>Input Variable:<br/>  ORIEN    Order Internal Entry Number (array variable)<br/>Ouput Variable:<br/>  Y        Y(AI)=Order_IEN^Treatment_Factors^ICD9^ICD9_Description<br/>           There can be up to 4 ICD9 codes and thier descriptions<br/>           ICD901^DESC01^ICD902^DESC02^ICD903^DESC03^ICD904^DESC04<br/>Local Variables:<br/>  AI       Array Index<br/>  CI       Clinical Index<br/>  TF       Treatment Factors<br/>  TFCI     Treatment Factors Clinical Indicators</pre>{:/}
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | {::nomarkdown}  N AI,CI,CNT,DXS,TF,TFCI<br> S U="^",(CNT,TF)=""<br> F  S CNT=$O(ORIEN(CNT)) Q:CNT=""  D<br> . S TF=$$GTF(ORIEN(CNT))<br> . S DXS=$$GDCD(ORIEN(CNT))<br> . I TF="NNNNNNNN"&(DXS="") Q<br> . S TFCI(CNT)=ORIEN(CNT)_U_TF_$S(DXS="":"",1:U_DXS)<br> M Y=TFCI{:/}


### CPRS

[BA/UBACore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas")
[BA/UBAGlobals.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}