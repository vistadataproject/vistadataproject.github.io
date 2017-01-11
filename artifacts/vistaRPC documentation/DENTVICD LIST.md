---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVICD LIST 

 property | value 
--- | --- 
 label | DENTVICD LIST
 tag | LIST
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | GLOBAL ARRAY
 description | This will return a list of active ICD codes for a lookup value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DENTVA | LIST |  | true | An input array \DENTVA\ will have to be set up in following format:   DENTVA(0) = \LOOKUP^Value\      user input lookup value  DENTVA(1) = \CHKSCR^Value\      If value set to \P\, only valid ICD9 codes that are eligible to be      principle diagnosis will be returned.  DENTVA(2) = \ACTDATE^Value\       (ACTDATE is in Fileman format, NULL dates will be set to Today)      The visit date of the ICD code.  DENTVA(3) = \MAX^Value\ (100 is the default)         The maximum number of diagnosis you want returned. | 




 Generated on January 11th 2017, 7:15:04 am