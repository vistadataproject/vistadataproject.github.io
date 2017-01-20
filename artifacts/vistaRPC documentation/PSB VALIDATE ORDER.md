---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB VALIDATE ORDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB VALIDATE ORDER{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [PSBVDLVL](http://code.osehra.org/dox/Routine_PSBVDLVL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN{:/} | 
| {::nomarkdown}PSBIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Medication Order Number{:/} | 
| {::nomarkdown}PSBTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Order Type U for unit dose orderV for IV order{:/} | 
| {::nomarkdown}PSBADMIN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Administration date/time, if one is present.{:/} | 
| {::nomarkdown}PSBTAB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Medication tab the order is on.{:/} | 
| {::nomarkdown}PSBUID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The actual scan value.{:/} | 
| {::nomarkdown}PSBASTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Current scan status of the VDL of the medication.{:/} | 
| {::nomarkdown}PSBORSTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Current order status on the VDL>{:/} | 
| {::nomarkdown}PSBRMV{:/} |  |  | {::nomarkdown}true{:/} | {::nomarkdown}Action the user is trying to take.{:/} | 
| {::nomarkdown}psbdien{:/} |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}