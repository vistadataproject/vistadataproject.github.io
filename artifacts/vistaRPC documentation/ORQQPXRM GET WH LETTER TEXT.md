---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM GET WH LETTER TEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GET WH LETTER TEXT{:/}
 tag | {::nomarkdown}LETTER{:/}
 routine | [WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Retrieve letter text for a WH letter{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WVIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LETTER^[WVRPCNO1](http://code.osehra.org/dox/Routine_WVRPCNO1_source.html)
 Method comment | Returns the letter text for the purpose of
 First comment | {::nomarkdown}notification<br/>Input: RESULT - array name to return data in [required]<br/>WVIEN - FILE 790.404 IEN [required]<br/>Output: RESULT(0)=First line of letter text   <OR><br/>-1^error message<br/>RESULT(n)= remaining lines of letter text{:/}
 Input parameters | {::nomarkdown}WVIEN{:/}
 Code | ```  I '$G(WVIEN) S RESULT(0)="-1^Purpose IEN not greater than 0" Q
 I '$D(^WV(790.404,WVIEN,0)) D  Q
 .S RESULT(0)="-1^No such purpose of notification"
 .Q
 I '$O(^WV(790.404,WVIEN,1,0)) D  Q
 .S RESULT(0)="-1^No letter defined for this purpose"
 .Q
 N WVCNT,WVLOOP
 S RESULT(0)="",(WVCNT,WVLOOP)=0
 F  S WVLOOP=$O(^WV(790.404,WVIEN,1,WVLOOP)) Q:'WVLOOP  D
 .S WVCNT=WVCNT+1
 .S RESULT(WVCNT)=$G(^WV(790.404,WVIEN,1,WVLOOP,0))
 .Q```




 Generated on January 14th 2017, 7:26:35 am