---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV UPDATE SUBFILE MULT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV UPDATE SUBFILE MULT{:/}
 tag | {::nomarkdown}ADDUPD{:/}
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Allows editing of multiple entries in a FileMan multiple at one time.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the file# to add/edit data.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the IEN of the entry to add/edit.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array holding entries for adding:   DATA(n)=$START   DATA(n)=field^value   DATA(n)=field^value   DATA(n)=$END  for updating:    DATA(n)=$START    DATA(n)=SubfieldIEN^field^value    DATA(n)=SubfieldIEN^field^value    DATA(n)=$END {:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FLAG=0 to add entries to a multiple,FLAG=1 to update entries in a multiple.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}