---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PXRM REMINDER DIALOG (TIU) 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDER DIALOG (TIU){:/}
 tag | {::nomarkdown}TDIALOG{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Dialog for a given dialog ien.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIALOG IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reminder Dialog ien from #801.41{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TDIALOG^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}ORDLG<br>DFN{:/}
 Code | {::nomarkdown}  D DIALOG^PXRMRPCD(.ORY,ORDLG,DFN)<br> I $P($G(ORY(1)),U)=-1 Q<br> S ORY(0)=0_U_+$P($G(^PXRMD(801.41,ORDLG,0)),U,17){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}