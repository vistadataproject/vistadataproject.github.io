---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ADD VIEWING AUDIT 

 property | value 
--- | --- 
 label | DSIV ADD VIEWING AUDIT
 tag | AAUDIT
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | SINGLE VALUE
 description | Add \viewing\ audit entry to 19625, with minimum data. This rpc verifies that the user checked to see whether a buffer entry was needed for an appt.  Buffer IEN will be set to 0. input is DATA(\DFN\) - required, pointer to the patient file         DATA(\LOC\) - required, free text clinic location         DATA(\APDT\)- required, appt date return -1^error message  or ien of entry

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LIST |  | true | DATA(\DFN\), DATA(\LOC\) and DATA(\APDT\) are required. | 