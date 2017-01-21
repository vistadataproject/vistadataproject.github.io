---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; GMV MARK ERROR 

 property | value 
--- | --- 
 name | GMV MARK ERROR
 domain | Vital
 description | {::nomarkdown}This remote procedure call marks a selected vitals record in the GMRV<br/>Vital Measurement (#120.5) file as entered-in-error.<br/> <br/>This remote procedure call is documented in Integration Agreement 4414.{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/GMV MARK ERROR)
 MUMPS implementation | [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
 type | CHANGE
 complexity | MEDIUM
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMRVDATA | LITERAL ([UPDARRAY](#for-id-gmrvdata)) | true | {::nomarkdown}GMVDATA contains the following information:<br/> <br/> piece1^piece2^piece3<br/> <br/> where piece1 = FILE 120.5 IEN <br/>       piece2 = FILE 200 IEN (i.e., DUZ)<br/>       piece3 = A single value to indicate the reason for the error.<br/>                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =<br/>                INCORRECT PATIENT and 4 = INVALID RECORD{:/} |  | 

#### UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
|  | REFERENCE |  | {::nomarkdown}FILE 120.5 IEN{:/} |  | 1 | 
|  | REFERENCE |  | {::nomarkdown}FILE 200 IEN (i.e., DUZ){:/} |  | 58 | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>1</dt><dd>INCORRECT DATE/TIME</dd><dt>2</dt><dd>INCORRECT READING</dd><dt>3</dt><dd>INCORRECT PATIENT</dd><dt>4</dt><dd>INVALID RECORD</dd></dl>{:/} | {::nomarkdown}If the record is marked as entered in error, RESULT is set to \OK\.<br/>Otherwise, RESULT is set to \Record Not Found\<br/> <br/> Example:<br/> > S GMVDATA=\1560^547^1\<br/> > D ERROR^GMVUTL1(.RESULT,GMVDATA) ZW RESULT<br/> > RESULT=\OK\{:/} |  | INVALID RECORD | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 21st 2017, 4:22:40 am</p>{:/}