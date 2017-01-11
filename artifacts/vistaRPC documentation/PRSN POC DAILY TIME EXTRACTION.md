---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PRSN POC DAILY TIME EXTRACTION 

 property | value 
--- | --- 
 label | PRSN POC DAILY TIME EXTRACTION
 tag | POCTIME
 routine | [PRSN9B](http://code.osehra.org/dox/Routine_PRSN9B_source.html)
 return value type | GLOBAL ARRAY
 description | VANOD shall have the ability to extract data from the POC DAILY ACTIVITYEXTRACTION File (#451.7). Input Parameters: The PEV RPC Broker call shall be called with thefollowing input parameters. Parameter 1:  Integer - records with a sequence number greater thanthis value shall be returned, in sequence.  If you want to return records starting at the beginning of the file then a value of 0 should be sent as this parameter.  The number of records returned shall notexceed the value passed in parameter 2. Parameter 2:  Integer - Maximum number of records to be returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PRSNSEQ | LITERAL | 15 | true | Any records in POC DAILY ACTIVITY EXTRACTION File (#451.7) with a sequencenumber greater than this value shall be returned, in sequence.  The numberof records returned shall not exceed the value passed in parameterPRSNREC. | 
| PRSNREC | LITERAL | 15 | true | This is the Maximum number of records to be returned. | 