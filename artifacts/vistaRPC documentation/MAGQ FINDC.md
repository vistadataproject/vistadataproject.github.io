---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ FINDC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ FINDC{:/}
 tag | {::nomarkdown}FINDC{:/}
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}By placing carat delimited values in the find value parameterthe subscriber can perform a compound index lookup on an extended primary key.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The file number of the content table.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IENS of the main level or subfile level of the content table.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The FIND1^DIC lookup options.{:/} | 
| {::nomarkdown}FNDVALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The carat delimited lookup.  Each piece is the same as the subscript in the index.{:/} | 
| {::nomarkdown}XREF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The subscriber specified cross reference for the lookup.{:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The subscriber specified DIC(\S\) logic for the lookup.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}