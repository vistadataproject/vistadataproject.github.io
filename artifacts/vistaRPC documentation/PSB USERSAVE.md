---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB USERSAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB USERSAVE{:/}
 tag | {::nomarkdown}USRSAVE{:/}
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Save the users current window settings for the next session.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBWIN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the current window settings so that the next time the user activates the application the window will reappear in the same format. Data is in the following format:    Window Top;Window Left;Window Height;Window Width;Window State{:/} | 
| {::nomarkdown}PSBVDL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}VDL settings{:/} | 
| {::nomarkdown}PSBUDCW {:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}UD tab column settings{:/} | 
| {::nomarkdown}PSBPBCW{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PB tab column settings {:/} | 
| {::nomarkdown}PSBIVCW{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IV tab column settings   {:/} | 
| {::nomarkdown}PSBDEV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Last print device used.{:/} | 
| {::nomarkdown}PSBCSRT{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PSBCV1{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PSBCV2{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PSBCV3{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PSBCV4{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PSBORMODE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Last Order mode per user upon exit of BCMA. This parameter is for the last Order Mode the user was using upon exiting BCMA.   Value  0    Inpatient order mode  1    Clinic order mdoe{:/} | 
| {::nomarkdown}PSBCLSRCH{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Last Clinic Search text criteria entered per user.  This parameter contains two pieces of data delimited by a \/\.  First piece of data is the Clinic name search Prefix text and the second is the Clinic name contains search text. Example: AL-BLUE TEAM/CARDIAC{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}