import {ExtensionType, Section, List, Paragraph, Title} from "./Statistics.style"

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      <Title className="title">{title}</Title>

      <List>
        {stats.map(stat => (
          <ExtensionType key={stat.id}>
            <span className="label">{stat.label}</span>
            <Paragraph>{stat.percentage}%</Paragraph>
          </ExtensionType>
        ))}
      </List>
    </Section>
  );
};
