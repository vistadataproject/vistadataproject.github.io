---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR FINDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR FINDER{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Call FIND^DIC to get a list of matches on the file for the input value{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file in which you wish to search.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IENS through which you wish to search for the value VALUE.If you are searching the top level of a file, this should be null.  Seethe FileMan Programmers manual for instructions on constructing IENSstrings.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an ^ (or \;\) delimited list of fields that you wish returned fromeach entry that matches the lookup conditions that you have specified.{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the maximum number of entries to be returned.  Defaults to allentries matching the lookup value VALUE.{:/} | 
| {::nomarkdown}INDEX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If you wish to do the lookup on specific indexes, then enter that here.  The index string must be compliant with the Fileman Documentation.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter a value that will be used by Fileman for the lookup.  This call does not support the .VALUE syntax allowed by FIND^DIC{:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If you wish to use the DIC(\S\) equivalent then enter it here.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Fileman FLAGS parameter used in the FILE^DIC api.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}