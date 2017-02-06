---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Cmop_System-550 

<dl>
<dt>id</dt><dd>Cmop_System-550</dd>
<dt>fmId</dt><dd>550</dd>
<dt>label</dt><dd>Cmop System</dd>
<dt>location</dt><dd>^PSX(550,</dd>
<dt>description</dt><dd>The system parameters in this file manage operations of the Consolidated <br/>Mail Outpatient Pharmacy for the medical center. This information controls<br/>the transmission of data to the Consolidated Mail Outpatient Pharmacy<br/>host facility selected by the medical center. Information in this file <br/>must be entered or edited ONLY through the Consolidated Mail Outpatient <br/>Pharmacy package options.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| system | .01 | System | {::nomarkdown}This is the free text name of the CMOP system.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| status | 1 | Status | {::nomarkdown}The current processing status of this facility.  ACTIVE <br/>status indicates the facility is participating in transmitting data<br/>to the CMOP.  INACTIVE status indicates that CMOP processing is not <br/>currently available.<br/> 'N' for 'Active Non-CS only'<br/> 'C' for 'Active CS only'<br/> 'B' for 'Active both CS and Non-CS'{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | 
| xmit_status | 2 | Xmit Status | {::nomarkdown} <br/>This field contains a set of codes indicating the current status of the<br/>job which transmits data to the CMOP.  Only one transmission may process<br/>at a given time.{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>R</dt><dd>DATA RECOVERY </dd><dt>H</dt><dd>NO CURRENT TRANSMISSION</dd><dt>T</dt><dd>TRANSMITTING DATA</dd></dl>{:/} | 
| cmop_domain | 3 | Cmop Domain | {::nomarkdown}This is a valid MailMan domain for the Consolidated Mail Outpatient<br/>Pharmacy system receiving the facility-transmitted data.{:/} | POINTER |  | REQUIRED | Domain-4_2 | 
| activate_inactivate_dt_tm | 4 | Activate/inactivate Dt/tm | {::nomarkdown}The date/time of the Activate/Inactivate action.{:/} | [OBJECT] |  |  | [Activate_inactivate_Dt_tm-550_04](#Activate_inactivate_Dt_tm-550_04)  | 
| last_batch_transmitted | 6 | Last Batch Transmitted | {::nomarkdown}The batch number of the last completed transmission.{:/} | POINTER |  |  | Cmop_Transmission-550_2 | 
| auto_transmit | 7 | Auto Transmit |  | [OBJECT] |  |  | [Auto_Transmit-550_07](#Auto_Transmit-550_07)  | 
| purge_dt_tm | 8 | Purge Dt/tm |  | [OBJECT] |  |  | [Purge_Dt_tm-550_08](#Purge_Dt_tm-550_08)  | 
| task_number | 9 | Task Number | {::nomarkdown}The task number of the currently running transmission job.{:/} | NUMERIC |  | INDEXED |  | 
| auto_transmit_cs | 10 | Auto Transmit Cs | {::nomarkdown}This multiple is used to track and control the background jobs that<br/>gather and transmit CMOP controlled substance prescription transmissions.{:/} | [OBJECT] |  |  | [Auto_Transmit_Cs-550_09](#Auto_Transmit_Cs-550_09)  | 
| noncs_days_to_transmit | 11 | Non-cs Days To Transmit | {::nomarkdown}The number of days into the future the NON-CS process will look to pick up<br/>prescriptions for a patient already in the transmission.{:/} | NUMERIC |  |  |  | 
| cs_days_to_transmit | 12 | Cs Days To Transmit | {::nomarkdown}The number of days into the future the CS process will look to pick up<br/>prescriptions for a patient already in the transmission.{:/} | NUMERIC |  |  |  | 

## <a name="Activate_inactivate_Dt_tm-550_04"></a>Activate_inactivate_Dt_tm-550_04 

<dl>
<dt>id</dt><dd>Activate_inactivate_Dt_tm-550_04</dd>
<dt>fmId</dt><dd>550.04</dd>
<dt>label</dt><dd>Activate/inactivate Dt/tm</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| activate_inactivate_dt_tm | .01 | Activate/inactivate Dt/tm | {::nomarkdown}The date/time of the Activate/Inactivate action.<br/> {:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| initiator | 1 | Initiator | {::nomarkdown}The person initiating this action.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| cmop_response_dt_tm | 2 | Cmop Response Dt/tm | {::nomarkdown}The date/time the CMOP responded to the request or notification.{:/} | DATE-TIME |  |  |  | 
| cmop_response | 3 | Cmop Response | {::nomarkdown}This field describes the CMOP response to the request or notification.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DISAPPROVED</dd><dt>N</dt><dd>NOTIFICATION RECEIVED</dd><dt>A</dt><dd>APPROVED</dd><dt>P</dt><dd>PENDING</dd></dl>{:/} | 
| action_type | 4 | Action Type | {::nomarkdown}The type of action (Activate/Inactivate) for this entry.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>INACTIVATION NOTICE</dd><dt>A</dt><dd>ACTIVATION REQUEST</dd></dl>{:/} | 
| remote_initiator | 5 | Remote Initiator | {::nomarkdown}Name of the CMOP person who sent the message.{:/} | STRING |  |  |  | 

## <a name="Auto_Transmit-550_07"></a>Auto_Transmit-550_07 

<dl>
<dt>id</dt><dd>Auto_Transmit-550_07</dd>
<dt>fmId</dt><dd>550.07</dd>
<dt>label</dt><dd>Auto Transmit</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| auto_transmit | .01 | Auto Transmit | {::nomarkdown}A '1' in this field indicates the facility has currently scheduled<br/>background transmissions for CMOP processing.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>NO</dd></dl>{:/} | 
| queued_to_begin | 1 | Queued To Begin | {::nomarkdown}The date/time of the initial background transmission.{:/} | DATE-TIME |  |  |  | 
| scheduling_frequencyhrs | 2 | Scheduling Frequency(hrs) | {::nomarkdown}This is the frequency (in hours) that the automatic processing will be<br/>rescheduled.{:/} | NUMERIC |  |  |  | 
| next_transmission_time | 3 | Next Transmission Time | {::nomarkdown}This is the date/time of the next scheduled auto transmission.{:/} | DATE-TIME |  |  |  | 
| scheduled_by | 5 | Scheduled By | {::nomarkdown}The name of the person who scheduled the automatic processing.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| task_number | 6 | Task Number | {::nomarkdown}This is the task number used to reschedule the job.{:/} | NUMERIC |  |  |  | 
| number_of_days_to_transmit | 7 | Number Of Days To Transmit | {::nomarkdown}This number determines the number of days to add to the current date to<br/>calculate the transmit through date for CMOP auto transmissions.{:/} | NUMERIC |  |  |  | 

## <a name="Purge_Dt_tm-550_08"></a>Purge_Dt_tm-550_08 

<dl>
<dt>id</dt><dd>Purge_Dt_tm-550_08</dd>
<dt>fmId</dt><dd>550.08</dd>
<dt>label</dt><dd>Purge Dt/tm</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| purge_dt_tm | .01 | Purge Dt/tm | {::nomarkdown}Date/time the last purge by the CMOP background manager was completed.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| total_orders_purged | 1 | Total Orders Purged | {::nomarkdown}This is the total records purged from the PSX(501 global.{:/} | NUMERIC |  |  |  | 
| start_seq_number | 3 | Start Seq # | {::nomarkdown} <br/>The starting message number of the data transmission.{:/} | NUMERIC |  |  |  | 
| end_seq_number | 4 | End Seq # | {::nomarkdown} <br/>The last message number of the data transmission.{:/} | NUMERIC |  |  |  | 

## <a name="Auto_Transmit_Cs-550_09"></a>Auto_Transmit_Cs-550_09 

<dl>
<dt>id</dt><dd>Auto_Transmit_Cs-550_09</dd>
<dt>fmId</dt><dd>550.09</dd>
<dt>label</dt><dd>Auto Transmit Cs</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| auto_transmit_cs | .01 | Auto Transmit Cs | {::nomarkdown}A '1' in this field indicates the facility has currently scheduled<br/>background controlled substances transmissions for CMOP processing.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>NO</dd></dl>{:/} | 
| queued_to_begin | 1 | Queued To Begin | {::nomarkdown}The date/time of the initial background controlled substances<br/>transmission.{:/} | DATE-TIME |  |  |  | 
| scheduling_frequency_hrs | 2 | Scheduling Frequency (hrs) | {::nomarkdown}This is the frequency (in hours) that the automatic processing will be<br/>rescheduled.{:/} | NUMERIC |  |  |  | 
| next_transmission_time | 3 | Next Transmission Time | {::nomarkdown}This is the date/time of the next scheduled auto transmission.{:/} | DATE-TIME |  | REQUIRED |  | 
| scheduled_by | 5 | Scheduled By | {::nomarkdown}The name of the person who scheduled the automatic processing.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| task_number | 6 | Task Number | {::nomarkdown}This is the task number used to reschedule the job.{:/} | NUMERIC |  |  |  | 
| number_of_days_to_transmit | 7 | Number Of Days To Transmit | {::nomarkdown}This number determines the number of days to add to the current date to<br/>calculate the transmit through date for CMOP auto transmissions.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}