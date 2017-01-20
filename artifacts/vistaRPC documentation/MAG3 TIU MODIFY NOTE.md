---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 TIU MODIFY NOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TIU MODIFY NOTE{:/}
 tag | {::nomarkdown}MOD{:/}
 routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Modify an Existing Note. Change it's status from unsigned to administrative closureor to signed.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of the Patient.{:/} | 
| {::nomarkdown}MAGTIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the Note in file ^TIU(8925{:/} | 
| {::nomarkdown}MAGADCL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} 1 = Mark this Note as Administratively Closed otherwise it will be Un-Signed{:/} | 
| {::nomarkdown}MAGMODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Mode of Admin Closure:\S\ = Scanned Document\M\ = Manual closure{:/} | 
| {::nomarkdown}MAGES{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The encrypted Electronic Signature{:/} | 
| {::nomarkdown}MAGESBY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown} The DUZ of the Signer (Defaults to DUZ){:/} | 
| {::nomarkdown}MAGTEXT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}3200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Text to add to the Note.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}