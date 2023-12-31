'use client';
import React, { useState } from 'react';
import { SelectOption } from "@/components/select";
import Item from '@/component/project/item';
import { lv, mv, hv, ev, LvSwgr, MvSwgr, HvSwgr, EvSwgr, LvTrafo, MvTrafo, HvTrafo, EvTrafo, LvCable, MvCable, HvCable, EvCable, LvRmu, MvRmu, HvRmu, EvRmu } from '@/constant/project/item';

const Team = () => {
  const [option, setOption] = useState<Record<string, SelectOption[]>>({});

  const handleOption = (key: string) => (options: SelectOption[]) => {
    setOption(prev => ({ ...prev, [key]: options }));
  };

  return (
    <div>
      <Item label="LV" options={lv} onOptionChange={handleOption('lv')} />
      <Item label="MV" options={mv} onOptionChange={handleOption('mv')} />
      <Item label="HV" options={hv} onOptionChange={handleOption('hv')} />
      <Item label="EV" options={ev} onOptionChange={handleOption('ev')} />
      <Item label="LV Swgr" options={LvSwgr} onOptionChange={handleOption('lvSwgr')} />
      <Item label="MV Swgr" options={MvSwgr} onOptionChange={handleOption('mvSwgr')} />
      <Item label="HV Swgr" options={HvSwgr} onOptionChange={handleOption('hvSwgr')} />
      <Item label="EV Swgr" options={EvSwgr} onOptionChange={handleOption('evSwgr')} />
      <Item label="LV Trafo" options={LvTrafo} onOptionChange={handleOption('lvTrafo')} />
      <Item label="MV Trafo" options={MvTrafo} onOptionChange={handleOption('mvTrafo')} />
      <Item label="HV Trafo" options={HvTrafo} onOptionChange={handleOption('hvTrafo')} />
      <Item label="EV Trafo" options={EvTrafo} onOptionChange={handleOption('evTrafo')} />
      <Item label="LV Cable" options={LvCable} onOptionChange={handleOption('lvCable')} />
      <Item label="MV Cable" options={MvCable} onOptionChange={handleOption('mvCable')} />
      <Item label="HV Cable" options={HvCable} onOptionChange={handleOption('hvCable')} />
      <Item label="EV Cable" options={EvCable} onOptionChange={handleOption('evCable')} />
      <Item label="LV RMU" options={LvRmu} onOptionChange={handleOption('lvRmu')} />
      <Item label="MV RMU" options={MvRmu} onOptionChange={handleOption('mvRmu')} />
      <Item label="HV RMU" options={HvRmu} onOptionChange={handleOption('hvRmu')} />
      <Item label="EV RMU" options={EvRmu} onOptionChange={handleOption('evRmu')} />
    </div>
  );
}

export default Team;