---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV MARK ERROR 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV MARK ERROR{:/}
 tag | {::nomarkdown}ERROR{:/}
 routine | [GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV MARK ERROR [RPC entry point]
 Leading comment lines | {::nomarkdown}GMVDATA CONSISTS OF THE FOLLOWING DATA:<br/>FILE # 120.5 IEN^DUZ^INCORRECT DATE/TIME^INCORRECT READING^INCORRECT<br/>PATIENT^INVALID RECORD{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVDATA contains the following information:  piece1^piece2^piece3  where piece1 = FILE 120.5 IEN        piece2 = FILE 200 IEN (i.e., DUZ)       piece3 = A single value to indicate the reason for the error.                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =                INCORRECT PATIENT and 4 = INVALID RECORD{:/} | 




 Generated on January 13th 2017, 6:44:47 am