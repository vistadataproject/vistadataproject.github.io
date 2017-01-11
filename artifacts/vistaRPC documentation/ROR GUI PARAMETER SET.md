---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GUI PARAMETER SET 

 property | value 
--- | --- 
 label | ROR GUI PARAMETER SET
 tag | SETPARM
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | SINGLE VALUE
 description | The ROR GUI PARAMETER SET remote procedure stores the parameter value andassociates it with the provided entity (see the DBIA #2263 for more details).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INSTANCE | LITERAL | 91 | true | The INSTANCE parameter defines the instance name of the GUI parameter. It can also contain the parameter name as the second \^\-piece (by default, the \ROR GUI PARAMETER\ is used). | 
| ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the context that the parameter value isassociated with. By default ($G(ENTITY)=\\), the \USR\ (user settings)value is used (see the DBIA #2263 for more details). The other value thatis used most often is the \PKG\ (package settings). | 
| VALUE | LIST |  |  | The VALUE parameter defines the value of the GUI parameter. It should beeither a literal (string value) or a list (text value). You can use the \@\ value to delete the parameter.  NOTE: The list (the Mult property) should not contain       the 0 subscript (it will not be stored). Example #1 (string value):   RPCBroker.Param[0].Value := 'MAIN FORM POS';  RPCBroker.Param[0].PType := literal;  RPCBroker.Param[1].Value := '';  RPCBroker.Param[1].PType := literal;  RPCBroker.Param[2].Value := '5,5,400,250';  RPCBroker.Param[2].PType := literal; Example #2 (text value):   RPCBroker.Param[0].Value := 'COM PORT SETTINGS';  RPCBroker.Param[0].PType := literal;  RPCBroker.Param[1].Value := 'PKG';  RPCBroker.Param[1].PType := literal;  RPCBroker.Param[2].Mult[1] := 'Port=COM1';  RPCBroker.Param[2].Mult[2] := 'Baud=19200';  RPCBroker.Param[2].PType := list; | 




Generated on January 11th 2017, 6:34:23 am