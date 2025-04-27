import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;

  return (
    <div className="flex flex-col">
      <span className="text-left text-lg font-bold">{name}</span>
      <ul className="flex flex-col gap-y-2 mt-4">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <li className="relative pl-6 text-sm font-medium text-left">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500" />
      {name}
    </li>
  );
});

Skill.displayName = 'Skill';
