---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU HAS AUTHOR SIGNED? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU HAS AUTHOR SIGNED?{:/}
 tag | {::nomarkdown}AUTHSIGN{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Boolean RPC returns a value of 0 if the author has not signed and the user attempting to sign is the expected co-signer.  Returns a 1 if the author has signed or the user attempting to sign is NOT the expected co-signer.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU Document IEN.{:/} | 
| {::nomarkdown}TIUUSR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the DUZ of the user attempting to sign.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | AUTHSIGN^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Has Author signed?
 Input parameters | {::nomarkdown}TIUDA, TIUUSR{:/}
 First comment | {::nomarkdown}<pre> if TIUY =<br/> 0 = Author has NOT signed & TIUUSR = Expected Cosigner<br/> 1 = Author HAS signed or TIUUSR '= Expected Cosigner<br/></pre>{:/}
 Code | {::nomarkdown}  N TIUD12,TIUD15<br> S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUD15=$G(^(15))<br> S TIUY=1<br> D:$P(TIUD12,U,8)=TIUUSR  Q<br> . S:$P(TIUD12,U,2)'=$P(TIUD15,U,2) TIUY=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}