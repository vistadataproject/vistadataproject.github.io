---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF AUTHLIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF AUTHLIST{:/}
 tag | {::nomarkdown}AUTHLIST{:/}
 routine | [DSIFENA2](http://code.osehra.org/dox/Routine_DSIFENA2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Pass in IEN (DFN), return list of current authorizations or -1^Not a valid patient or -1^Not a valid patient{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in Patient File IEN (file #2) {:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}    FLAG=\\ OR \0\ Outpatient authorizations only (excludes Unauthorized)    FLAG=\1\ Inpatient auths onlY    FLAG=\2\ Both Outpt, Inpt. & Unauthorized{:/} | 
| {::nomarkdown}DSIFDAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}  Enter the to date (in FM format) to restrict the number of records  returned.    Example: If you enter 3100501 the RPC will return all authorizations up  to May 1, 2010.    This field can also be used in conjunction with DSIFFDAT to produce a  specific time period in which authorizations to be returned.{:/} | 
| {::nomarkdown}DSIFFDAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Enter a from date (in FM format) to limit the authorizations returned.    Example: If you enter 3090101 it will only return authorizations between  today and January 1, 2009.{:/} | 
| {::nomarkdown}DSIF AUTHLIST{:/} |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}