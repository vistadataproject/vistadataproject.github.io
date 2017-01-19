---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTVICD LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTVICD LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return a list of active ICD codes for a lookup value.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DENTVA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}An input array \DENTVA\ will have to be set up in following format:   DENTVA(0) = \LOOKUP^Value\      user input lookup value  DENTVA(1) = \CHKSCR^Value\      If value set to \P\, only valid ICD9 codes that are eligible to be      principle diagnosis will be returned.  DENTVA(2) = \ACTDATE^Value\       (ACTDATE is in Fileman format, NULL dates will be set to Today)      The visit date of the ICD code.  DENTVA(3) = \MAX^Value\ (100 is the default)         The maximum number of diagnosis you want returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}