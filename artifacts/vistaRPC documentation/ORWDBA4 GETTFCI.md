---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA4 GETTFCI 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA4 GETTFCI{:/}
 tag | {::nomarkdown}GETTFCI{:/}
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTFCI^[ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 Method comment | Get Treatment Factors Clinical Indicators
 First comment | {::nomarkdown}Input Variable:<br/>ORIEN    Order Internal Entry Number (array variable)<br/>Ouput Variable:<br/>Y        Y(AI)=Order_IEN^Treatment_Factors^ICD9^ICD9_Description<br/>There can be up to 4 ICD9 codes and thier descriptions<br/>ICD901^DESC01^ICD902^DESC02^ICD903^DESC03^ICD904^DESC04<br/>Local Variables:<br/>AI       Array Index<br/>CI       Clinical Index<br/>TF       Treatment Factors<br/>TFCI     Treatment Factors Clinical Indicators{:/}
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | ```  N AI,CI,CNT,DXS,TF,TFCI
 S U="^",(CNT,TF)=""
 F  S CNT=$O(ORIEN(CNT)) Q:CNT=""  D
 . S TF=$$GTF(ORIEN(CNT))
 . S DXS=$$GDCD(ORIEN(CNT))
 . I TF="NNNNNNNN"&(DXS="") Q
 . S TFCI(CNT)=ORIEN(CNT)_U_TF_$S(DXS="":"",1:U_DXS)
 M Y=TFCI```




 Generated on January 14th 2017, 7:26:36 am