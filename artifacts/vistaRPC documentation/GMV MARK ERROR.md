---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV MARK ERROR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV MARK ERROR{:/}
 tag | {::nomarkdown}ERROR{:/}
 routine | [GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVDATA contains the following information:  piece1^piece2^piece3  where piece1 = FILE 120.5 IEN        piece2 = FILE 200 IEN (i.e., DUZ)       piece3 = A single value to indicate the reason for the error.                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =                INCORRECT PATIENT and 4 = INVALID RECORD{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ERROR^[GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html)
 Method comment | GMV MARK ERROR [RPC entry point]
 Input parameters | {::nomarkdown}GMVDATA{:/}
 First comment | {::nomarkdown}<pre>GMVDATA CONSISTS OF THE FOLLOWING DATA:<br/>FILE # 120.5 IEN^DUZ^INCORRECT DATE/TIME^INCORRECT READING^INCORRECT<br/>PATIENT^INVALID RECORD</pre>{:/}
 Code | {::nomarkdown}  N GMVFDA,GMVIEN,GMVIENS<br> I '$D(^GMR(120.5,+GMVDATA,0))#2 S RESULT="ERROR: Record Not Found" Q<br> S GMVIENS=(+GMVDATA)_","<br> S GMVFDA(120.5,GMVIENS,2)=1<br> S GMVFDA(120.5,GMVIENS,3)=$P(GMVDATA,"^",2)<br> S GMVFDA(120.506,"+1,"_GMVIENS,.01)=$P(GMVDATA,"^",3)<br> D UPDATE^DIE("","GMVFDA","GMVIEN")<br> S RESULT="OK"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} No Source Code Available (GMV_VitalsViewEnter.dll)  <br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}