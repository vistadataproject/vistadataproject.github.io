---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA MVI SEARCH PERSON 

 property | value 
--- | --- 
 label | DVBA MVI SEARCH PERSON
 tag | FNDPAT
 routine | [DVBAMVI1](http://code.osehra.org/dox/Routine_DVBAMVI1_source.html)
 return value type | ARRAY
 description | This remote procedure passes the delimited person traits to the MVI SEARCH PERSON web service and returns the results of the search.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PERSON TRAITS | LITERAL |  | true | Patient demographics used for search contained in a single \^\-delimited string.   Piece 1: FIRSTNAME             (required)  Piece 2: MIDDLENAME or INITIAL (optional)  Piece 3: LASTNAME              (required)   Piece 4: SSN (9 digits)        (required)    Piece 5: BIRTHDATE (FM format) (required)   Example:  CAPRI^TEST^PATIENT^999999999^2540101 | 
| INITIAL QUANTITY | LITERAL |  | true | This optional parameter populates the initialQuantity value attribute inthe 1305 HL7v3 message. The minimum value is 1 and the maximum value is10.  The parameter will default to 10 when the parameter is not defined. | 
| NAME FORMAT | LITERAL |  | true | This optional parameter controls the format of the full name resultreturned. Setting the parameter to 1 causes the name to be formatted asLASTNAME,FIRSTNAME MIDDLENAME SUFFIX.  Any other value or no value causesthe name to be formatted as FIRSTNAME MIDDLENAME LASTNAME SUFFIX. | 




 ###### Generated on January 11th 2017, 6:39:43 am