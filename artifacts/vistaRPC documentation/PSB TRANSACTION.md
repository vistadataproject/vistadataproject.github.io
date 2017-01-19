---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB TRANSACTION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB TRANSACTION{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBML](http://code.osehra.org/dox/Routine_PSBML_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is the filing RPC for all data returning from the clientregarding the medication log.  Filing is handled by business rules onthe server and this RPC will return either '1^Data Filed' or'-1^reason for not filing data' to the client.  Results of the processed transaction is communicated via the RESULTS array.  The number of RESULTS subscripts used (n) will be presented in RESULTS[0].  RESULTS [1..n] will contain the RESULTS message.   Business rules are conducted via the [0] node data (Input parameter sequence 1). If a '+1^MEDPASS' is encountered it is a complete new med pass and is validated as such.  Transaction type MEDPASS is the only type that requires a +1 in the first piece of the header, all other transactions MUST supply a valid medication log entry in the IENS. The data for filing is passed in as a list in Param[1] as shown below. Example Delphi Call   with RPCBroker1 do    begin    RemoteProcedure := 'PSB TRANSACTION';    Param[0].Value := '88484^COMMENT';    Param[0].PType := Literal;    Param[1].Mult['0'] := 'Comment for the med pass';    Param[1].Ptype := List;    Call;    end; BUSINESS LOGIC controlled by Param[0]: Param[0] = MEDLOG IEN ^ TRANSACTION ^ INSTRUCTOR DUZ ^ WITNESS DUZ           ^ WITNESS COMMENT ^ WITNESS HR ORDER LEVEL CODE -------------------------------------------------------------------------TRANSACTION = MEDPASS   Note: Entries 1-6 are required, 7,8,9 are required depending on          item [2] order type...  [0] = Patient IEN   [1] = IV/Unit Dose Order Number ^ Clinic Name (if a clinic order)   Note: will be passed in as I;#### for IV and U;#### for Unit Dose         future release will allow P;#### for pending  [2] = Schedule   Note: C:Continuous P:PRN 1:One Time O:On Call  [3] = Status   Note: G:Given H:Held R:Refused  [4] = Orderable Item   Note: IEN to 'PHARMACY ORDERABLE ITEM' (#50.7)  [5] = Scheduled Administration Date/Time   Note: This is when the med is scheduled, med is entered as GIVEN NOW!  [6] = Reason Given PRN^PRN Reason Flag   Note: Required if given PRN must be null if not PRN  [7] = Comment   Note: 1-200 characters  [8] = Injection Site [9] = Tab^Unique ID #  [10..n]= RecordType^IEN^Units Ordered^Units Given^Units Type           Record Type = DD:  Dispense Drug                        SOL: Solution                        ADD: Additive           IEN = Internal Entry Number of the following                if Record Type = DD:  DRUG (FILE #50)                                  SOL: IV SOLUTIONS (FILE #??)                                ADD: IV ADDITIVES (FILE #??)           Units Ordered = Number of units in the Inpt Meds Order           Units Given = Number of units scanned/entered by the user           Units Type = Type of administration unit (i.e. TAB, CAPLET, ML) -------------------------------------------------------------------------TRANSACTION = COMMENT  [0] = Comment to append to the log entry   Note: Will be appended to the log with user ien and NOW as a date -------------------------------------------------------------------------TRANSACTION = PRN EFFECTIVENESS  [0] = Effective Comment   Note: will be filed as entered now by current user  -------------------------------------------------------------------------TRANSACTION = STATUS UPDATE  [0] = New Status   Note: If status is Given, Date/Time administered D/T will be set to NOW         If status is Held/Refused administered D/T will be set to null         Status on med log must be <> null to execute.         New status must NOT match current status or G will overwrite          administration DT.  [1] = Comment   Note: Comment *IS* Required -------------------------------------------------------------------------TRANSACTION = EDIT  [0] = Action Status [1] = Patient DFN [2] = Inf/Inj Site [3] = IV Unique ID [4] = Admin Date/Time (fileman format) [5] = Prn Reason [6] = Prn Effectiveness  [7] = Comment       Note: comment data is required!  [8] = \DD/ADD/SOL^ Drug IEN ^ Dose Ordered ^ Dose Given          ^ Unit of Administration\  [n] = \additional data per DD/ADD/SOL associated with order.\{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBHDR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Contains the IEN or +1 up-arrow transaction.  See RPC description.{:/} | 
| {::nomarkdown}PSBREC{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}See description.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}